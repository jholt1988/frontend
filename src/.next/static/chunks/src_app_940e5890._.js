(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/services/axiosInstance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/services/axiosInstance.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Create base axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_URL || 'http://localhost:5000/api/v1',
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/services/apiService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
    "updateMaintenanceStatus": (()=>updateMaintenanceStatus),
    "updateTenantProfile": (()=>updateTenantProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/axiosInstance.js [app-client] (ecmascript)");
;
const getPayments = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/payments/mine');
    return res.data;
};
const createMaintenanceRequest = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/maintenance', data);
    return res.data;
};
const getMaintenanceRequests = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/maintenance');
    return res.data;
};
const updateMaintenanceStatus = async (id, status)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/maintenance/${id}`, {
        status
    });
    return res.data;
};
const getTenantProfile = async (userId)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/tenant-profile/${userId}`);
    return res.data;
};
const createTenantProfile = async (profile)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/tenant-profile', profile);
    return res.data;
};
const updateTenantProfile = async (userId, profile)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/tenant-profile/${userId}`, profile);
    return res.data;
};
const createPayment = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/payments', data);
    return res.data;
};
const searchUsers = async (query)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users?search=${encodeURIComponent(query)}`);
    return res.data; // assumes it returns [{ id, name, email }]
};
const getMyPayments = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/payments/mine');
    return res.data;
};
const getDashboardSummary = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/dashboard/summary');
    return res.data;
};
const getDashboardStats = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/dashboard/stats');
    return res.data;
};
const getTenantPayments = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/tenants/${id}/payments`);
    return res.data;
};
const getTenantMaintenance = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/tenants/${id}/maintenance`);
    return res.data;
};
const getTenants = async (search = '')=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$axiosInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users?role=tenant&search=${encodeURIComponent(search)}`);
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/features/MaintenanceList.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MaintenanceList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/apiService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MaintenanceList() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaintenanceList.useEffect": ()=>{
            if (user && (user.role === 'staff' || user.role === 'admin')) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMaintenanceRequests"])().then({
                    "MaintenanceList.useEffect": (data)=>setRequests(data)
                }["MaintenanceList.useEffect"]).catch({
                    "MaintenanceList.useEffect": (err)=>console.error('Error fetching maintenance requests:', err)
                }["MaintenanceList.useEffect"]).finally({
                    "MaintenanceList.useEffect": ()=>setLoading(false)
                }["MaintenanceList.useEffect"]);
            }
        }
    }["MaintenanceList.useEffect"], [
        user
    ]);
    const handleStatusChange = async (id, newStatus)=>{
        try {
            setUpdatingId(id);
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMaintenanceStatus"])(id, newStatus);
            setRequests((prev)=>prev.map((req)=>req.id === id ? {
                        ...req,
                        status: updated.status
                    } : req));
        } catch (err) {
            console.error('Status update failed:', err);
        } finally{
            setUpdatingId(null);
        }
    };
    if (!user || ![
        'staff',
        'admin'
    ].includes(user.role)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: "Unauthorized: Staff/Admin access only"
        }, void 0, false, {
            fileName: "[project]/src/app/features/MaintenanceList.jsx",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading maintenance requests..."
    }, void 0, false, {
        fileName: "[project]/src/app/features/MaintenanceList.jsx",
        lineNumber: 43,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto bg-white p-6 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Maintenance Requests"
            }, void 0, false, {
                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            requests.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No maintenance requests found."
            }, void 0, false, {
                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                lineNumber: 50,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-4",
                children: requests.map((req)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 border rounded bg-gray-50 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Description:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 55,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    req.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Priority:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 56,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    req.priority
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Created:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 57,
                                        columnNumber: 18
                                    }, this),
                                    " ",
                                    new Date(req.createdAt).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            req.photoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Photo:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this),
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: req.photoUrl,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-blue-600 underline",
                                        children: "View Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Status:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                            lineNumber: 69,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: req.status,
                                        onChange: (e)=>handleStatusChange(req.id, e.target.value),
                                        className: "border px-2 py-1 rounded",
                                        disabled: updatingId === req.id,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Received",
                                                children: "Received"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "In Progress",
                                                children: "In Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Completed",
                                                children: "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this),
                                    updatingId === req.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: "Updating..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                        lineNumber: 80,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, req.id, true, {
                        fileName: "[project]/src/app/features/MaintenanceList.jsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/features/MaintenanceList.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/features/MaintenanceList.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(MaintenanceList, "hYZ4TAVBt/dl2Q0/XTrXv5e3dWE=");
_c = MaintenanceList;
var _c;
__turbopack_context__.k.register(_c, "MaintenanceList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_940e5890._.js.map