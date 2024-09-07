const express = require('express');
const sql = require('mssql');
const config = require('./src/config/config.json'); 

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// MSSQL Connection Setup
sql.connect(config.mssql)
    .then(() => console.log('Connected to MSSQL'))
    .catch(err => console.error('MSSQL Connection Error:', err));

// POST route to insert vendor data
app.post('/api/vendors', async (req, res) => {
    const {
        VendorName,
        VendorCategoryID,
        Address,
        City,
        State,
        ZipCode,
        Country,
        PaymentContactName,
        PaymentContactEmail,
        PaymentContactPhone,
        PaymentAddress,
        PaymentCity,
        PaymentState,
        PaymentZip,
        PaymentCountry,
        SpecialInstructions,
        CompanyName,
        WebSite,
        AdditionalNotes
    } = req.body;

    try {
        const query = `
      INSERT INTO [dbo].[FINANCE_Vendors]
      (VendorID, VendorName, VendorCategoryID, Address, City, State, ZipCode, Country,
      PaymentContactName, PaymentContactEmail, PaymentContactPhone, PaymentAddress,
      PaymentCity, PaymentState, PaymentZip, PaymentCountry, SpecialInstructions,
      CompanyName, WebSite, AdditionalNotes, CreatedOn)
      VALUES (NEWID(), @VendorName, @VendorCategoryID, @Address, @City, @State, @ZipCode, @Country,
              @PaymentContactName, @PaymentContactEmail, @PaymentContactPhone, @PaymentAddress,
              @PaymentCity, @PaymentState, @PaymentZip, @PaymentCountry, @SpecialInstructions,
              @CompanyName, @WebSite, @AdditionalNotes, GETDATE())
    `;

        // Execute the SQL query
        const result = await sql.query(query, {
            VendorName,
            VendorCategoryID,
            Address,
            City,
            State,
            ZipCode,
            Country,
            PaymentContactName,
            PaymentContactEmail,
            PaymentContactPhone,
            PaymentAddress,
            PaymentCity,
            PaymentState,
            PaymentZip,
            PaymentCountry,
            SpecialInstructions,
            CompanyName,
            WebSite,
            AdditionalNotes
        });

        // Return a success message
        res.status(200).send('Vendor added successfully!');
    } catch (err) {
        console.error('Error inserting vendor:', err);
        res.status(500).send('Error inserting vendor');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
