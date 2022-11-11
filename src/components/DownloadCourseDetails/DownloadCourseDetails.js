import { Document, StyleSheet, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';

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

const DownloadCourseDetails = () => {
    return (
        <div>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Javascript New</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                    <Text
                    render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
                        fixed>

                    </Text>
                </Page>
            </Document>
        </div>
    );
};

export default DownloadCourseDetails;