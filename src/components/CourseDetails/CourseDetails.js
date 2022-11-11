import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { FaDownload } from 'react-icons/fa';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    text:{
        fontWeight: 'semibold',
        fontSize: '15px'
    }
});



const CourseDetails = () => {
    const courseData = useLoaderData();
    const { name, price, about, _id, picture } = courseData;
    
    const MyDoc = () => (
        <Document>
          <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image src={picture}/>
            <Text>Course Name: {name}</Text>
            <Text>Course Price: ${price}</Text>
            <Text>Vat: 0.05%</Text>
            <Text>Details: {about}</Text>
          </View>
        </Page>
        </Document>
      );
    return (

        <div className="card card-compact w-3/4 bg-base-100 shadow-xl">
            <figure className='p-2 w-2/4 mx-auto'><img src={picture} alt="Shoes" /></figure>

            <div className='mx-auto mt-2'>
            <PDFDownloadLink document={<MyDoc />} fileName='coursename.pdf'>
                {({loading}) => loading ? 
                'Loading document...'
                :
                <button className='btn btn-xs'> <FaDownload></FaDownload> <span className='mx-2 py-0'>Download</span></button>}
            </PDFDownloadLink>
            </div>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Details: {about}</p>
                <p>Price: ${price}</p>
                <div className="card-actions mt-5">
                    <button className="btn btn-primary mx-auto"><Link to={`/checkout/${_id}`}>Get Access!</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;