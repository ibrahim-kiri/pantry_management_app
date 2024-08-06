"use client";

import { useRouter } from "next/router";
import Header from "../components/Header";
import { Container } from "@mui/material";
import ItemForm from "../components/AddItemForm";
import Footer from "../components/Footer";

const AddItemPage = () => {
    const router = useRouter();

    const handleSave = () => {
        router.push('/');
    };

    return (
        <div>
            <Header />
            <Container>
                <ItemForm onSave={handleSave} />
            </Container>
            <Footer />
        </div>
    );
};

export default AddItemPage;