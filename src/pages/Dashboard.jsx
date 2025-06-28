import React from 'react';
import PatientDashboard from '../components/PatientDashboard';
import DoctorDashboard from '../components/DoctorDashboard';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
    const { user } = useAuth();

    return (
        <div>
            { user.role == "USER"? <PatientDashboard /> : <DoctorDashboard />}
        </div>
    )
}

export default Dashboard