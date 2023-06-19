import { useEffect, useState } from "react";
import "./AdminPage.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminPage() {
    const [genCodes, setGenCodes] = useState([]);
    const [data, setData] = useState([]);
    const [editedData, setEditedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedGenCode, setSelectedGenCode] = useState("");
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

    if (!isAuthenticated) {
        navigate('/admin');
    }

    useEffect(() => {
        fetchData(selectedGenCode);
    }, [selectedGenCode]);

    useEffect(() => {
        fetchGenCodes();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/advise/${selectedGenCode}`);
            const jsonData = await response.json();
            setData(jsonData);
            setEditedData(jsonData);
            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching data", error);
            setIsLoading(false);
        }
    };

    if (!selectedGenCode && genCodes.length > 0) {
        setSelectedGenCode(genCodes[0]);
    }

    const fetchGenCodes = async() => {
        try {
            const response = await fetch('http://127.0.0.1:8000/gen');
            const jsonData = await response.json();
            const codes = jsonData.map((item) => item.gen_code);
            setGenCodes(codes);
            const initialEditedData = jsonData.map((item) => ({
                title: item.title,
                advise: item.advise,
                ...item,
            }));
            setEditedData(initialEditedData);
            setIsLoading(false);
        } catch (error) {
            console.log("Error fetching gen codes", error);
            setIsLoading(false);
        }
    }

    const handleEdit = (index, field, value) => {
        const updatedData = [...editedData];
        if (updatedData[index]) {
            updatedData[index][field] = value;
            setEditedData(updatedData);
        }
    }

    const deleteRow = async (index) => {
        const adviceId = editedData[index].id;
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/delete/advice/${adviceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Advice deleted successfully!');
                const updatedData = [...editedData];
                updatedData.splice(index, 1);
                setEditedData(updatedData);
            } else {
                console.error('Failed to delete advice:', response.status);
            }
        } catch (error) {
            console.log('Error deleting advice:', error);
        }
    }

    const saveChanges = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/edit/advice', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedData),
          });
    
          if (response.ok) {
            console.log('Data saved successfully!');
            fetchData();
          } else {
            console.error('Failed to save data:', response.status);
          }
        } catch (error) {
          console.error('Error saving data:', error);
        }
    };

    const handleGencodeClick = (gencode) => {
        setSelectedGenCode(gencode);
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Bewerk de adviezen</h1>
            <div className="gencode-buttons">
                {genCodes.map((genCode) => (
                    <button key={genCode} onClick={() => handleGencodeClick(genCode)}
                    className={genCode === selectedGenCode ? 'active' : ''}>
                        {genCode}
                    </button>
                ))}
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Advies</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                        <td>
                            <textarea
                            className="input-field title-input-field"
                            type="text"
                            value={editedData[index]?.title}
                            onChange={(e) => handleEdit(index, 'title', e.target.value)}
                            />
                        </td>
                        <td>
                            <textarea
                            className="input-field advice-input-field"
                            type="text"
                            value={editedData[index]?.advise}
                            onChange={(e) => handleEdit(index, 'advise', e.target.value)}
                            />
                        </td>
                        <td>
                            <button className="delete-btn" onClick={() => deleteRow(index)}><FontAwesomeIcon icon={faTrash} /></button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center" }}>
                                <button className="save-btn" onClick={saveChanges}>Opslaan</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </> 
    )
}

export default AdminPage;