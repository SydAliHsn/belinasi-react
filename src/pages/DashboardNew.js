import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const DashboardNew = () => {
  return (
    <div>
      {/* <Routes> */}
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIindex: 1000 }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              // onClick={() => setThemeSettings(true)}
              style={{ borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </div>
      {/* </Routes> */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

        body{
          margin: 0;
          padding:0;
          font-family: "Open Sans", sans-serif;
        }

        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        @import url('https://cdn.syncfusion.com/ej2/material.css');

      .sidebar {
        box-shadow: rgb(113 122 131 / 11%) 0px 7px 30px 0px;
      }
      .nav-item,
      .navbar {
        z-index: 10000;
      }
      @media  screen and (max-width:800px) {
        .sidebar{
          z-index: 10000000;
        }
      }

      .e-dlg-center-center, .e-quick-popup-wrapper.e-device{
        z-index: 1000000 !important;
      }

      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgb(216, 216, 216);
        border-radius: 40px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }

      /* color-picker style  */

      #preview {
        background: transparent
          url('https://ej2.syncfusion.com/react/demos/src/color-picker/images/pen.png')
          no-repeat;
        display: inline-block;
        height: 80px;
        margin: 10px 0;
        min-width: 300px;
        max-width: 600px;
        background-color: #008000;
      }

      .e-input-group:not(.e-float-icon-left), .e-input-group.e-success:not(.e-float-icon-left), .e-input-group.e-warning:not(.e-float-icon-left), .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-success:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-warning:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left){
        border: none;
      }
  `}
      </style>
    </div>
  );

  // return <DatePicker />;
};

export default DashboardNew;
