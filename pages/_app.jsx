"use client";

import '@/styles/globals.css';
import { AuthProvider } from "@/context/AuthProvider";
import VirtualAssistant from '@/components/VirtualAssistant';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <div id="background"></div>
            <Component {...pageProps} />
            <VirtualAssistant />
        </AuthProvider>
    );
}

export default MyApp;