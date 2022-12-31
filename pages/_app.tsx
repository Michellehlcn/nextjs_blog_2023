import "@styles/globals.css";
import { DarkModeProvider } from "../context/darkModeContext";
import React from "react";
import Layout from "../layout/Layout";
export default function MyApp ({ Component, pageProps }) {
    return (
        /* Adding DarkMode Provider */
        <DarkModeProvider>
            <Layout>
            <Component{...pageProps} />
            </Layout>
        </DarkModeProvider>
    );
}