
const Contact = require('../models/contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContact = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !phoneNumber) {
    return res.status(400).json({ message: 'First Name, Last Name, Email, and Phone Number are required.' });
  }

  const contact = new Contact({
    firstName,
    lastName,
    email,
    phoneNumber,
    company,
    jobTitle,
  });

  try {
    const newContact = await contact.save();
    res.status(201).json({message:'Data Added Successfully'});
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: 'A contact with this email already exists.' });
    } else {
      res.status(400).json({ message: err.message });
    }
  }
};


exports.updateContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    contact.firstName   = firstName   || contact.firstName;
    contact.lastName    = lastName    || contact.lastName;
    contact.email       = email       || contact.email;
    contact.phoneNumber = phoneNumber || contact.phoneNumber;
    contact.company     = company     || contact.company;
    contact.jobTitle    = jobTitle    || contact.jobTitle;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getContactById = async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.json(contact);
    } catch (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(500).json({ message: err.message });
    }
  };