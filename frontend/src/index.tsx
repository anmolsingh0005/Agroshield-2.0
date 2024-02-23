import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter
  basename={
    process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : ""
  }
  >
  <ConfigProvider
			theme={{
				token: {
					colorBgBase: "#ffffff",
					colorPrimaryBg: "#F5F8FE",
					colorBgContainer: "#ffffff",
					borderRadiusLG: 20,
					fontFamily: "'Poppins', sans-serif",
					colorPrimary: "#3478f6",
					colorInfo: "#3478f6",
					wireframe: false,
					colorSuccess: "#49a078",
					colorLink: "#c9d9f8",
					colorWarning: "#fcb07e",
					colorError: "#bd1a35",
					colorLinkActive: "#a8c0ed",
					fontSizeHeading2: 24,
					fontSizeHeading4: 18,
					fontSizeHeading5: 16,
					//borderRadius: 16,
					fontSize: 14,
					fontSizeHeading1: 32,
					fontSizeHeading3: 20,
				},
      }}
        >
    <App />
    </ConfigProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
