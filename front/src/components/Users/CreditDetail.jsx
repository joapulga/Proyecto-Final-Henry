import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditDetailsById } from '../service/querisCredits'; 

const CreditDetail = () => {
    const { id } = useParams(); 
    const [installments, setInstallments] = useState([]);
    const [creditInfo, setCreditInfo] = useState(null);

    useEffect(() => {
        const fetchCreditDetails = async () => {
            const creditData = await getCreditDetailsById(id); 
            console.log("Datos del crédito:", creditData); 

            if (!creditData) {
                console.error("No se encontraron datos del crédito.");
                return;
            }

            setCreditInfo(creditData); 

            
            const { createdAt, amount, months, interest } = creditData;

            
            if (!createdAt) {
                console.error("createdAt no es válido:", createdAt);
                return; 
            }

            const calculatedInstallments = [];
            const monthlyInterestRate = parseFloat(interest);
            const totalAmount = amount * (1 + monthlyInterestRate);
            const monthlyPayment = totalAmount / months;

            for (let month = 1; month <= months; month++) {
                const installmentDate = new Date(createdAt); 
                if (isNaN(installmentDate)) {
                    console.error("Fecha de instalación no válida:", createdAt);
                    return; 
                }

                installmentDate.setMonth(installmentDate.getMonth() + month);
                calculatedInstallments.push({
                    date: installmentDate.toISOString().split('T')[0],
                    amount: monthlyPayment.toFixed(2),
                    month: month,
                });
            }
            setInstallments(calculatedInstallments); 
        };

        fetchCreditDetails();
    }, [id]);

    if (!creditInfo) return <div>Cargando...</div>;

    return (
        <div>
            <h2>Detalles del Crédito</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha de Cuota</th>
                        <th>Monto de Cuota</th>
                        <th>Número de Mes</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {installments.map((installment, index) => (
                        <tr key={index}>
                            <td>{installment.date}</td>
                            <td>${installment.amount}</td>
                            <td>{installment.month}</td>
                            <td><button>Pagar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CreditDetail;
