import React from "react";

const FacebookLoginIntegration = () => {
    // Initialize Facebook SDK
    React.useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "145591725119758", // Replace with your Facebook App ID
                cookie: true, // Enable cookies for session handling
                xfbml: true, // Parse social plugins on this page
                version: "v16.0", // Use the latest Facebook API version
            });
        };

        // Load the Facebook SDK script
        (function (d, s, id) {
            let js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.async = true;
            js.defer = true;
            js.crossOrigin = "anonymous";
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

    // Login button click handler
    const handleLogin = () => {
        window.FB.login(
            (response) => {
                if (response.status === "connected") {
                    console.log("Login successful:", response);
                    alert("Login successful! Token: " + response.authResponse.accessToken);
                } else {
                    console.log("Login failed:", response);
                    alert("Login failed. Please try again.");
                }
            },
            {
                config_id: "539196575695796", // Replace with your configuration ID
                response_type: "code", // Expected response type
                override_default_response_type: true, // Override default response
                extras: {
                    setup: {
                        solutionID: "470262232807106", // Example solution ID
                    },
                },
            }
        );
    };

    return (
        <div>
            {/* Login Button */}
            <button
                id="login-btn"
                style={{
                    backgroundColor: "green",
                    padding: "10px 20px",
                    color: "#fff",
                }}
                onClick={handleLogin}
            >
                Launch Embedded Signup
            </button>
        </div>
    );
};

export default FacebookLoginIntegration;
