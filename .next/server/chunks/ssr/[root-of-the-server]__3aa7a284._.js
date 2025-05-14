module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/app/services/axiosInstance.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/axiosInstance.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Create base axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.API_URL || 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Automatically attach token (if exists)
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Optional: Global error handler (e.g., auto logout on 401)
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response && error.response.status === 401) {
        console.warn('⛔ Unauthorized - logging out');
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
}}),
"[project]/src/app/services/apiService.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/services/apiService.js
__turbopack_context__.s({
    "createMaintenanceRequest": (()=>createMaintenanceRequest),
    "createPayment": (()=>createPayment),
    "createTenantProfile": (()=>createTenantProfile),
    "getDashboardStats": (()=>getDashboardStats),
    "getDashboardSummary": (()=>getDashboardSummary),
    "getMaintenanceRequests": (()=>getMaintenanceRequests),
    "getMyPayments": (()=>getMyPayments),
    "getPayments": (()=>getPayments),
    "getTenantMaintenance": (()=>getTenantMaintenance),
    "getTenantPayments": (()=>getTenantPayments),
    "getTenantProfile": (()=>getTenantProfile),
    "getTenants": (()=>getTenants),
    "searchUsers": (()=>searchUsers),
    "updateTenantProfile": (()=>updateTenantProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/axiosInstance.js [app-ssr] (ecmascript)");
;
const getPayments = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/payments/mine');
    return res.data;
};
const createMaintenanceRequest = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/maintenance', data);
    return res.data;
};
const getMaintenanceRequests = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/maintenance');
    return res.data;
};
const getTenantProfile = async (userId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/tenant-profile/${userId}`);
    return res.data;
};
const createTenantProfile = async (profile)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/tenant-profile', profile);
    return res.data;
};
const updateTenantProfile = async (userId, profile)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/tenant-profile/${userId}`, profile);
    return res.data;
};
const createPayment = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/payments', data);
    return res.data;
};
const searchUsers = async (query)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/users?search=${encodeURIComponent(query)}`);
    return res.data; // assumes it returns [{ id, name, email }]
};
const getMyPayments = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/payments/mine');
    return res.data;
};
const getDashboardSummary = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/dashboard/summary');
    return res.data;
};
const getDashboardStats = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/dashboard/stats');
    return res.data;
};
const getTenantPayments = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/tenants/${id}/payments`);
    return res.data;
};
const getTenantMaintenance = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/tenants/${id}/maintenance`);
    return res.data;
};
const getTenants = async (search = '')=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/users?role=tenant&search=${encodeURIComponent(search)}`);
    return res.data;
};
}}),
"[project]/src/app/features/TenantProfile.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TenantProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/apiService.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TenantProfilePage() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user?.id) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTenantProfile"])(user.id).then((data)=>{
                setProfile(data);
                setFormData(data);
            });
        }
    }, [
        user
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTenantProfile"])(user.id, formData);
        setProfile(updated);
        setIsEditing(false);
    };
    if (!profile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading profile..."
    }, void 0, false, {
        fileName: "[project]/src/app/features/TenantProfile.jsx",
        lineNumber: 37,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-xl mx-auto bg-white p-6 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Tenant Profile"
            }, void 0, false, {
                fileName: "[project]/src/app/features/TenantProfile.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "phone",
                        value: formData.phone || '',
                        onChange: handleChange,
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "address",
                        value: formData.address || '',
                        onChange: handleChange,
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "leaseStart",
                        value: formData.leaseStart || '',
                        onChange: handleChange,
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "leaseEnd",
                        value: formData.leaseEnd || '',
                        onChange: handleChange,
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "rentAmount",
                        value: formData.rentAmount || '',
                        onChange: handleChange,
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsEditing(false),
                                type: "button",
                                className: "btn btn-secondary",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/features/TenantProfile.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Phone:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 57,
                                columnNumber: 14
                            }, this),
                            " ",
                            profile.phone
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Address:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 58,
                                columnNumber: 14
                            }, this),
                            " ",
                            profile.address
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Lease Start:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 59,
                                columnNumber: 14
                            }, this),
                            " ",
                            profile.leaseStart
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Lease End:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 60,
                                columnNumber: 14
                            }, this),
                            " ",
                            profile.leaseEnd
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Rent:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/TenantProfile.jsx",
                                lineNumber: 61,
                                columnNumber: 14
                            }, this),
                            " $",
                            profile.rentAmount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsEditing(true),
                        className: "btn btn-primary mt-4",
                        children: "Edit"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/TenantProfile.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/features/TenantProfile.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/features/TenantProfile.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3aa7a284._.js.map