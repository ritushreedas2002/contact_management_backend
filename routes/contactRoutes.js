// routes/contacts.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact management API endpoints
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - phoneNumber
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the contact
 *               lastName:
 *                 type: string
 *                 description: Last name of the contact
 *               email:
 *                 type: string
 *                 description: Email address of the contact
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number of the contact
 *               company:
 *                 type: string
 *                 description: Company name (optional)
 *               jobTitle:
 *                 type: string
 *                 description: Job title (optional)
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phoneNumber:
 *                   type: string
 *                 company:
 *                   type: string
 *                 jobTitle:
 *                   type: string
 *       400:
 *         description: Invalid input or email already exists
 */
router.post('/', contactController.createContact);

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: List of all contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phoneNumber:
 *                     type: string
 *                   company:
 *                     type: string
 *                   jobTitle:
 *                     type: string
 */
router.get('/', contactController.getContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Contact ID
 *     responses:
 *       200:
 *         description: Contact details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phoneNumber:
 *                   type: string
 *                 company:
 *                   type: string
 *                 jobTitle:
 *                   type: string
 *       404:
 *         description: Contact not found
 */
router.get('/:id', contactController.getContactById);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the contact
 *               lastName:
 *                 type: string
 *                 description: Last name of the contact
 *               email:
 *                 type: string
 *                 description: Email address of the contact
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number of the contact
 *               company:
 *                 type: string
 *                 description: Company name (optional)
 *               jobTitle:
 *                 type: string
 *                 description: Job title (optional)
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phoneNumber:
 *                   type: string
 *                 company:
 *                   type: string
 *                 jobTitle:
 *                   type: string
 *       404:
 *         description: Contact not found
 */
router.put('/:id', contactController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Contact ID
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 *       404:
 *         description: Contact not found
 */
router.delete('/:id', contactController.deleteContact);

module.exports = router;