import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import netlify from '../../../../images/netlify.png';
import chromeDevTool from '../../../../images/ChromeDev.png';

const Tools = () => {
    return (
        <div>
            <div>
            {/* Language: JavaScript (ES6), Python, C, C++, Java, SQL, HTML 5, CSS 3, SASS */}
            <Box>
            <Typography style={{margin: "auto"}} variant="h3" gutterBottom component="div">
                <span>Tools</span>                
            </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{paddingTop: '30px'}}>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
                        <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                        </svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
<path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0" fill="#2489ca"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0" fill="#1070b3"></path><path d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0" fill="#0877b9"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0" fill="#3c99d4"></path>
                        </svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
<path d="M6.648 67.352c0 3.91-.363 5.183-1.296 6.12-1.036.81-2.383 1.255-3.782 1.255l.364 2.234c2.164.023 4.265-.637 5.906-1.856.883-.93 1.539-2 1.93-3.152a7.79 7.79 0 00.347-3.55V53.608H6.648zm0 0M32.531 65.59c0 1.676 0 3.172.153 4.469h-3.082l-.207-2.66c-.645.94-1.567 1.718-2.672 2.25a8.055 8.055 0 01-3.621.788c-3.004 0-6.579-1.406-6.579-7.148v-9.543h3.473v8.938c0 3.105 1.113 5.183 4.246 5.183a5.472 5.472 0 001.883-.308 4.993 4.993 0 001.594-.914 4.197 4.197 0 001.058-1.375 3.638 3.638 0 00.36-1.625V53.633h3.468V65.5zm0 0M39.11 59.063c0-2.079 0-3.778-.157-5.317h3.11l.152 2.793c.695-1.012 1.691-1.84 2.887-2.398A8.493 8.493 0 0149 53.363c4.613 0 8.082 3.332 8.082 8.29 0 5.855-4.168 8.761-8.676 8.761a7.606 7.606 0 01-3.332-.621c-1.027-.45-1.906-1.121-2.547-1.95v8.938H39.11zm3.417 4.355c.008.406.063.812.157 1.207.293.992.96 1.871 1.898 2.5s2.094.965 3.281.965c3.653 0 5.801-2.57 5.801-6.3 0-3.263-2.02-6.056-5.672-6.056-1.445.102-2.797.653-3.804 1.555-1.004.902-1.598 2.086-1.66 3.336zm0 0M63.266 53.73l4.172 9.63a50.836 50.836 0 011.214 3.328c.364-.981.75-2.235 1.22-3.395l3.78-9.563h3.653l-5.18 11.618c-2.59 5.586-4.172 8.468-6.555 10.21-1.199.95-2.664 1.61-4.246 1.922l-.855-2.5a9.76 9.76 0 003.031-1.453c1.262-.89 2.266-2.023 2.926-3.308a2.05 2.05 0 00.285-.715 2.342 2.342 0 00-.234-.781l-7.043-15.04h3.78zm0 0M86.516 49.043v4.691h4.972v2.235h-4.972v8.804c0 2.012.675 3.172 2.59 3.172a8.95 8.95 0 002.019-.203l.156 2.238a9.845 9.845 0 01-3.082.399 5.507 5.507 0 01-2.035-.27 4.921 4.921 0 01-1.719-.98c-1.054-1.219-1.535-2.734-1.347-4.246v-8.938h-2.953v-2.234h3.003v-3.977zm0 0M97.883 62.418c-.07.758.05 1.52.355 2.23a5.218 5.218 0 001.407 1.899c.625.539 1.375.953 2.203 1.215.824.265 1.71.367 2.586.308a14.312 14.312 0 005.18-.851l.597 2.234a17.75 17.75 0 01-6.344 1.008c-1.27.074-2.539-.09-3.726-.477a9.07 9.07 0 01-3.153-1.777c-.89-.781-1.578-1.719-2.008-2.75a6.664 6.664 0 01-.492-3.219c0-4.918 3.395-8.804 8.938-8.804 6.215 0 7.77 4.691 7.77 7.687.03.461.03.922 0 1.383H97.804zm10.152-2.234a3.67 3.67 0 00-.144-1.79 4.075 4.075 0 00-.993-1.57 4.844 4.844 0 00-1.656-1.078 5.534 5.534 0 00-2.023-.39c-1.422.09-2.758.632-3.739 1.527-.984.89-1.543 2.066-1.57 3.3zm0 0M116.46 58.809c0-1.918 0-3.575-.155-5.094h3.11v3.195h.155c.325-.984 1-1.86 1.926-2.5.93-.64 2.067-1.015 3.254-1.074.324-.035.656-.035.984 0v2.793a6.071 6.071 0 00-1.191 0c-1.176.039-2.297.445-3.148 1.144-.856.7-1.383 1.645-1.489 2.653-.097.46-.148.922-.156 1.386v8.692h-3.418V58.832zm0 0" fill="#4e4e4e"></path><path d="M109.766 7.281a7.691 7.691 0 01-1.09 4.282 7.583 7.583 0 01-3.262 2.949 7.49 7.49 0 01-4.34.62 7.525 7.525 0 01-3.953-1.913A7.642 7.642 0 0195.137 5a7.606 7.606 0 012.629-3.531 7.509 7.509 0 014.136-1.461 7.51 7.51 0 015.422 1.996 7.627 7.627 0 012.438 5.273zm0 0" fill="#767677"></path><path d="M65.758 96.79c-20.098 0-37.649-7.364-46.766-18.267a49.95 49.95 0 0018.102 24.254 49.251 49.251 0 0028.676 9.215 49.279 49.279 0 0028.675-9.215 49.917 49.917 0 0018.094-24.254C103.406 89.426 85.855 96.79 65.758 96.79zm0 0M65.75 25.883c20.098 0 37.652 7.367 46.766 18.265a49.95 49.95 0 00-18.102-24.253 49.27 49.27 0 00-28.672-9.22 49.27 49.27 0 00-28.672 9.22A49.909 49.909 0 0018.97 44.148C28.102 33.27 45.652 25.883 65.75 25.883zm0 0" fill="#f37726"></path><path d="M38.164 117.984a9.671 9.671 0 01-1.371 5.399 9.5 9.5 0 01-9.59 4.504 9.405 9.405 0 01-4.98-2.418 9.671 9.671 0 01-2.809-4.797 9.73 9.73 0 01.313-5.567 9.624 9.624 0 013.328-4.453 9.466 9.466 0 0112.043.688 9.63 9.63 0 013.066 6.648zm0 0" fill="#9e9e9e"></path><path d="M21.285 23.418a5.53 5.53 0 01-3.14-.816 5.627 5.627 0 01-2.618-5.672 5.612 5.612 0 011.407-2.95 5.593 5.593 0 012.789-1.664 5.46 5.46 0 013.238.184 5.539 5.539 0 012.586 1.969 5.66 5.66 0 01-.399 7.129 5.557 5.557 0 01-3.867 1.82zm0 0" fill="#616262"></path>
</svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
<path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
</svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
<path d="M35.3 101.8c-4 0-7.3.5-9.7 1.4-.9 3.2-1.3 6.6-1.3 10.4 0 7 1.2 11.3 9.2 11.3 3.7 0 6.8-1.1 9.3-2.3L42 119c-2.4.9-5.5 1.7-8.2 1.7-3.5 0-4.6-.9-4.8-6.9h15v-2.2c0-6.1-2.2-9.8-8.7-9.8zM29 111c.1-3 .3-3.8.5-4.7 1.9-.4 4.1-.4 5.6-.4 3.3 0 3.9 2.1 3.9 5.1H29zm-15.1-9.2c-2.7 0-4.9.7-7.9 1.5V93H2v31h4v-16.6c3-1 5-1.5 7-1.5 1 0 2 .5 2 1.7v16.9l.4-.4H20v-15.8c0-3.8-1.8-6.5-6.1-6.5zm108.1.2v17.4c-3 1-5.6 1.5-7.7 1.5-1 0-2.3-.5-2.3-1.7V102h-4v16.7c0 3.7 1.3 6.3 5.6 6.3 2.7 0 7.4-.4 12.4-3.5V102h-4zm-18.2 0h-5.4c-1.3 3-3.2 7-5.6 9H91V93h-5v31h5v-10h2.1c2.8 3 4.6 7 6 10h5.6c-2.1-4-4.5-8.4-7.7-12.4 2.6-2.7 5-5.6 6.8-9.6zM48 124h4v-16.6c2-.8 5-1.1 7-1.2v-4c-3 .2-7 .9-11 3.1V124zm23.4-22.2c-6.1 0-10.3 3.2-10.3 11.7 0 8 3.2 11.5 10.3 11.5 6.1 0 10.3-3.2 10.3-11.7 0-8-3.2-11.5-10.3-11.5zm0 19.2c-4 0-5.7-1.4-5.7-7.5 0-5.6 2-7.7 5.7-7.7 4 0 5.7 1.4 5.7 7.5-.1 5.6-2.1 7.7-5.7 7.7zM99 10.3C99 5.7 95.3 2 90.7 2H37.3C32.7 2 29 5.7 29 10.3v70.4c0 4.6 3.7 8.3 8.3 8.3h53.4c4.6 0 8.3-3.7 8.3-8.3V10.3zm-67 .5C32 7.5 34.5 5 37.7 5h52.5c3.3 0 5.8 2.6 5.8 5.8v69.4c0 3.3-2.5 5.9-5.7 5.9H37.7c-3.3 0-5.7-2.6-5.7-5.9V10.8zM85.9 14H75.2s-3.4 8-7.1 12h10.4c5.6-7 7.4-12 7.4-12zM45 76.9l9.8-9.9-9.8-9.8zm28-34.5v34.5l-.1.1H82V42.5c0-18.9-27-8.2-27-8.2V13.8l-9.8.1s0 32 .1 31.9C75.2 34.2 73 42.4 73 42.4z" fill="#6762A6"></path>
</svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <span>
                            <img style={{width: "20%"}}  src={netlify} alt="" />
                        </span>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <svg style={{width: "20%"}} viewBox="0 0 128 128">
<g fill="#f58220"><path d="M11.4 115.62H8.25v-24.4H22.5v3.01H11.4v8.02h10.04v2.93H11.42v10.44h-.02zM27.92 94.74c-.43.43-.96.64-1.57.64-.61 0-1.15-.21-1.57-.64-.43-.43-.64-.96-.64-1.57s.21-1.15.64-1.57c.43-.43.96-.64 1.57-.64.61 0 1.15.21 1.57.64s.64.96.64 1.57-.22 1.11-.64 1.57zm0 20.88h-3.14v-16.7h3.14v16.7zM34.47 115.62h-3.14v-16.7h3.01v2.72h.13c.32-.91.96-1.65 1.97-2.24.99-.59 1.95-.88 2.88-.88s1.71.13 2.34.4l-1.2 2.93c-.4-.16-.96-.24-1.68-.24-1.15 0-2.13.45-3.01 1.36-.88.91-1.31 2.08-1.31 3.52v9.13zM49.23 116.18c-2.53 0-4.58-.85-6.15-2.53s-2.37-3.81-2.37-6.37c0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H43.85c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.25.89-2.8 1.34-4.61 1.34zm4.51-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM68.1 116.18c-1.28 0-2.42-.27-3.44-.83-1.01-.53-1.76-1.23-2.26-2.05h-.13v2.32h-3.01v-24.4h3.14v7.7l-.13 2.32h.13c.51-.83 1.25-1.49 2.26-2.05 1.01-.53 2.16-.83 3.44-.83 2.16 0 4.02.85 5.6 2.56 1.57 1.71 2.34 3.81 2.34 6.34s-.77 4.64-2.34 6.34c-1.58 1.73-3.44 2.58-5.6 2.58zm-.54-2.87c1.47 0 2.72-.56 3.76-1.65 1.04-1.09 1.57-2.56 1.57-4.37s-.53-3.28-1.57-4.37c-1.04-1.09-2.29-1.65-3.76-1.65s-2.74.53-3.76 1.63c-1.01 1.09-1.55 2.56-1.55 4.4 0 1.84.51 3.3 1.55 4.4 1.05 1.07 2.3 1.61 3.76 1.61zM83.84 116.18c-1.79 0-3.25-.51-4.45-1.55-1.2-1.01-1.79-2.37-1.79-4.05 0-1.81.69-3.25 2.1-4.29 1.41-1.04 3.14-1.55 5.22-1.55 1.84 0 3.36.35 4.53 1.01v-.48c0-1.23-.43-2.21-1.25-2.96-.85-.75-1.87-1.12-3.09-1.12-.91 0-1.73.21-2.48.64-.75.43-1.25 1.01-1.52 1.79l-2.88-1.23c.4-1.01 1.15-1.92 2.29-2.77 1.15-.85 2.64-1.28 4.5-1.28 2.13 0 3.92.61 5.33 1.87 1.41 1.25 2.1 3.01 2.1 5.28v10.12h-3.01v-2.32h-.13c-1.23 1.93-3.07 2.89-5.47 2.89zm.51-2.87c1.31 0 2.48-.48 3.52-1.44 1.07-.96 1.6-2.1 1.6-3.44-.88-.72-2.21-1.09-4-1.09-1.52 0-2.66.32-3.44.99-.77.67-1.17 1.44-1.17 2.32 0 .83.35 1.47 1.07 1.95.71.47 1.51.71 2.42.71zM101.19 116.18c-1.87 0-3.41-.45-4.61-1.36a7.894 7.894 0 01-2.66-3.41l2.8-1.17c.88 2.1 2.4 3.14 4.53 3.14.99 0 1.79-.21 2.4-.64.61-.43.93-1.01.93-1.71 0-1.09-.77-1.84-2.29-2.21L98.9 108c-1.07-.27-2.08-.8-3.04-1.55-.96-.77-1.44-1.79-1.44-3.09 0-1.47.67-2.66 1.97-3.6 1.31-.93 2.85-1.39 4.66-1.39 1.47 0 2.8.35 3.94 1.01 1.17.67 2 1.63 2.48 2.88l-2.72 1.12c-.61-1.47-1.89-2.21-3.81-2.21-.93 0-1.71.19-2.34.59-.64.4-.96.91-.96 1.57 0 .96.75 1.6 2.21 1.95l3.3.77c1.57.37 2.72.99 3.49 1.87.75.88 1.12 1.89 1.12 3.01 0 1.49-.61 2.74-1.84 3.76-1.21 1.01-2.79 1.49-4.73 1.49zM117.58 116.18c-2.53 0-4.58-.85-6.15-2.53-1.57-1.68-2.37-3.81-2.37-6.37 0-2.42.77-4.53 2.29-6.29 1.55-1.76 3.49-2.64 5.89-2.64 2.48 0 4.45.8 5.94 2.42 1.49 1.63 2.24 3.78 2.24 6.47l-.03.59H112.2c.08 1.68.67 3.01 1.68 4 1.04.99 2.24 1.47 3.62 1.47 2.24 0 3.78-.96 4.58-2.88l2.8 1.17c-.53 1.31-1.44 2.37-2.69 3.25-1.26.89-2.8 1.34-4.61 1.34zm4.5-10.92c-.08-.96-.51-1.87-1.31-2.72-.8-.85-2-1.31-3.6-1.31-1.17 0-2.16.37-3.01 1.09-.85.72-1.44 1.71-1.76 2.93l9.68.01zM39.25 59.42l7.69-49.28c.27-1.68 2.52-2.08 3.31-.57l8.26 15.47-19.26 34.38zm54.67 11.97L86.58 26c-.22-1.41-1.99-1.99-3.01-.97L37.35 71.39l25.59 14.36c1.59.88 3.58.88 5.17 0l25.81-14.36zM73.14 31.8l-5.92-11.27c-.66-1.28-2.47-1.28-3.14 0l-26.03 46.4L73.14 31.8z"></path></g>
</svg>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{width: "100px"}}>
                        <span>
                            <img style={{width: "30%"}}  src={chromeDevTool} alt="" />
                        </span>
                    </Grid>
                </Grid>
            </Box>
            
            {/* Library/Framework: React JS, Node JS, Express JS, React Router (V5 & V6), Hash Router, React Hook Form, JWT, Rest API, Material UI, Tailwind, Bootstrap
            
            Familiar with: React Native, Next JS, React Spring, AOS, Typescript
            
            Tool: GitHub, VS Code, Jupyter Notebook (Anaconda 3), Figma, Netlify, Heroku, Firebase, Chrome Dev Tool */}
        </div>
        </div>
    );
};

export default Tools;