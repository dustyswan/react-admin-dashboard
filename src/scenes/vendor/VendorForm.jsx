import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { tokens } from '../../theme';

const VendorForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    VendorName: '',
    VendorCategoryID: '',
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    Country: '',
    PaymentContactName: '',
    PaymentContactEmail: '',
    PaymentContactPhone: '',
    PaymentAddress: '',
    PaymentCity: '',
    PaymentState: '',
    PaymentZip: '',
    PaymentCountry: '',
    SpecialInstructions: '',
    CompanyName: '',
    WebSite: '',
    AdditionalNotes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the form data to the backend API
    try {
      const response = await fetch('/api/vendors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Vendor added successfully!');
        setFormData({}); // Clear the form
      } else {
        alert('Error adding vendor');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box
      m="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" sx={{ color: colors.grey[100], marginBottom: 2 }}>
        Add New Vendor
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
        <TextField
          fullWidth
          label="Vendor Name"
          name="VendorName"
          value={formData.VendorName}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Vendor Category"
          name="VendorCategoryID"
          value={formData.VendorCategoryID}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            fullWidth
            label="City"
            name="City"
            value={formData.City}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="State"
            name="State"
            value={formData.State}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            fullWidth
            label="Zip Code"
            name="ZipCode"
            value={formData.ZipCode}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Payment Information
        </Typography>
        <TextField
          fullWidth
          label="Payment Contact Name"
          name="PaymentContactName"
          value={formData.PaymentContactName}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Payment Contact Email"
          name="PaymentContactEmail"
          value={formData.PaymentContactEmail}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Payment Contact Phone"
          name="PaymentContactPhone"
          value={formData.PaymentContactPhone}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Payment Address"
          name="PaymentAddress"
          value={formData.PaymentAddress}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            fullWidth
            label="Payment City"
            name="PaymentCity"
            value={formData.PaymentCity}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Payment State"
            name="PaymentState"
            value={formData.PaymentState}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            fullWidth
            label="Payment Zip"
            name="PaymentZip"
            value={formData.PaymentZip}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Payment Country"
            name="PaymentCountry"
            value={formData.PaymentCountry}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </Box>
        <TextField
          fullWidth
          label="Special Instructions"
          name="SpecialInstructions"
          value={formData.SpecialInstructions}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Company Name"
          name="CompanyName"
          value={formData.CompanyName}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Website"
          name="WebSite"
          value={formData.WebSite}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Additional Notes"
          name="AdditionalNotes"
          value={formData.AdditionalNotes}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit Vendor
        </Button>
      </form>
    </Box>
  );
};

export default VendorForm;
