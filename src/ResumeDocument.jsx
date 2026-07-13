import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { resumeData } from './data';

// Note: Using standard PDF fonts (Helvetica/Courier) for maximum reliability.
// Custom fonts can sometimes cause blank pages in development environments
// due to CORS or slow network loading.

const styles = StyleSheet.create({
    page: {
        padding: 35, // Increased from 25
        fontFamily: 'Helvetica',
        color: '#1e293b',
        backgroundColor: '#f8fafc',
    },
    header: {
        paddingBottom: 15, // Increased from 10
        borderBottom: '1pt solid #e2e8f0',
        marginBottom: 15, // Increased from 10
    },
    name: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 32, // Increased from 28
        color: '#0f172a',
    },
    italicName: {
        color: '#2563eb',
        fontFamily: 'Helvetica-BoldOblique',
    },
    title: {
        fontFamily: 'Courier',
        fontSize: 10,
        color: '#64748b',
        marginTop: 4,
        letterSpacing: 1,
    },
    sectionLabel: {
        fontFamily: 'Courier',
        fontSize: 8, // Increased from 7.5
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: '#94a3b8',
        marginBottom: 10, // Increased from 6
    },
    aboutText: {
        fontSize: 11, // Increased from 10
        lineHeight: 1.5, // Increased from 1.4
        fontFamily: 'Helvetica',
        color: '#334155',
        marginBottom: 20, // Increased from 12
    },
    experienceItem: {
        marginBottom: 15, // Increased from 10
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4, // Increased from 2
    },
    role: {
        fontSize: 12, // Increased from 11
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
    },
    company: {
        fontSize: 10,
        color: '#2563eb',
        fontFamily: 'Helvetica-Bold',
    },
    date: {
        fontFamily: 'Courier',
        fontSize: 9,
        color: '#64748b',
    },
    location: {
        fontFamily: 'Courier',
        fontSize: 8, // Reduced from 9
        color: '#94a3b8',
    },
    bullet: {
        fontSize: 10, // Increased from 9
        lineHeight: 1.5, // Increased from 1.4
        color: '#475569',
        marginLeft: 10,
        marginBottom: 4, // Increased from 2
        fontFamily: 'Helvetica',
    },
    sidebarSection: {
        marginTop: 20, // Increased from 15
    },
    contactItem: {
        marginBottom: 8, // Increased from 6
    },
    contactLabel: {
        fontFamily: 'Courier',
        fontSize: 7,
        color: '#94a3b8',
        textTransform: 'uppercase',
    },
    contactValue: {
        fontSize: 10, // Increased from 9
        color: '#334155',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6, // Increased from 4
        marginTop: 6, // Increased from 4
    },
    skillBadge: {
        fontFamily: 'Courier',
        fontSize: 8.5, // Increased from 8
        padding: '2 6', // Increased from 1 4
        backgroundColor: '#eff6ff',
        border: '0.5pt solid #bfdbfe',
        borderRadius: 3,
        color: '#2563eb',
    }
});

const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>
                    Brandon <Text style={styles.italicName}>Clements</Text>
                </Text>
                <Text style={styles.title}>{resumeData.role}</Text>
            </View>

            <View>
                <Text style={styles.sectionLabel}>About</Text>
                <Text style={styles.aboutText}>
                    {resumeData.about}
                </Text>
            </View>

            <View>
                <Text style={styles.sectionLabel}>Experience</Text>
                {resumeData.experience.map((exp, i) => (
                    <View key={i} style={styles.experienceItem}>
                        <View style={styles.expHeader}>
                            <View>
                                <Text style={styles.role}>{exp.role}</Text>
                                <Text style={styles.company}>{exp.company}</Text>
                            </View>
                            <View style={{ alignItems: 'right' }}>
                                <Text style={styles.date}>{exp.pdfDate || exp.date}</Text>
                                <Text style={styles.location}>{exp.location}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 6 }}>
                            {exp.bullets.map((b, j) => (
                                <Text key={j} style={styles.bullet}>
                                    • {b}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.sectionLabel}>Information</Text>
                    {resumeData.contact.filter(c => !c.internal).map(item => (
                        <View key={item.label} style={styles.contactItem}>
                            <Text style={styles.contactLabel}>{item.label}</Text>
                            <Text style={styles.contactValue}>{item.displayValue || item.url || item.value}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.sectionLabel}>Skills</Text>
                    <View style={styles.skillsContainer}>
                        {resumeData.skills.map(skill => (
                            <Text key={skill} style={styles.skillBadge}>{skill}</Text>
                        ))}
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={styles.sectionLabel}>Education</Text>
                <Text style={styles.role}>{resumeData.education.degree}</Text>
                <Text style={styles.contactValue}>{resumeData.education.school}</Text>
                <Text style={styles.date}>{resumeData.education.date}</Text>
            </View>
        </Page>
    </Document>
);

export default ResumeDocument;
