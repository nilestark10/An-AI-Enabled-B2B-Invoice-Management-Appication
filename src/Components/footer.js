import * as React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p><a href="www.google.com">Privacy Policy</a>| © {currentYear} HighRadius Corporation. All rights reserved </p>
        </footer>
    );
}
