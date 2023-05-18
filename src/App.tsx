import React from 'react';
import './App.css';
import HealthOverview from './pages/HealthOverview';
import { Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    margin: 15,
    marignTop: 15,
    padding: 10,
  },

  blueBar: {
    top: 0,
    padding: 0,
    width: 14,
    backgroundColor: '#50B2FA',
  },
  cards: {
    width: '48%',
    marginBottom: 15,
  },
});

// Create Document Component
export default function App() {
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <Page size="A4" style={styles.page}>
          <HealthOverview />
        </Page>
      </Document>
    </PDFViewer>
  );
}
