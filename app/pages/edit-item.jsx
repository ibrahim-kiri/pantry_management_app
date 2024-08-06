"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDoc } from "firebase/firestore";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Footer from "../components/Footer";


const EditItemPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const docRef = doc(db, 'pantryItems', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            }
        };
        if (id) {
            fetchItem();
        }
    }, [id]);

    const handleSave = () => {
        router.push('/');
    };

    return (
        <div>
            <Header />
            <Container>
                {item && <ItemForm item={item} onSave={handleSave} />}
            </Container>
            <Footer />
        </div>
    );
};

export default EditItemPage;