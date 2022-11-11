import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { FaDownload } from 'react-icons/fa';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});



const CourseDetails = () => {
    const courseData = useLoaderData();
    const { name, price, about, _id } = courseData;
    
    const MyDoc = () => (
        <Document>
          <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Course Name: {name}</Text>
            <Text>Course Price: {price}</Text>
          </View>
          <View style={styles.section}>
            <Text>Details: {about}</Text>
          </View>
        </Page>
        </Document>
      );
    return (

        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className='p-2'><img src="https://placeimg.com/400/225/tech" alt="Shoes" /></figure>

            <div className='mx-auto mt-2'>
            <PDFDownloadLink document={<MyDoc />} fileName='coursename.pdf'>
                {({loading}) => loading ? 
                'Loading document...'
                :
                <button className='btn btn-sm'> <FaDownload></FaDownload> <span className='mx-2 py-0'>Download</span></button>}
            </PDFDownloadLink>
            </div>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Details: {about}</p>
                <p>Price: ${price}</p>
                <div className="card-actions mt-5">
                    <button className="btn btn-primary"><Link to={`/checkout/${_id}`}>Get Access!</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;