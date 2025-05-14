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
"[project]/src/app/features/MaintenanceRequest.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MaintenanceRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/apiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MaintenanceRequest() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        description: '',
        priority: 'medium',
        photoUrl: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMaintenanceRequest"])(formData);
            setSubmitted(true);
            setFormData({
                description: '',
                priority: 'medium',
                photoUrl: ''
            });
        } catch (err) {
            console.error('Maintenance request failed:', err);
        } finally{
            setLoading(false);
        }
    };
    if (!user || user.role !== 'tenant') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: "Unauthorized: Tenants only"
        }, void 0, false, {
            fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-xl mx-auto bg-white p-6 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Submit Maintenance Request"
            }, void 0, false, {
                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-600 mb-4",
                children: "Request submitted successfully!"
            }, void 0, false, {
                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                lineNumber: 48,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "description",
                        value: formData.description,
                        onChange: handleChange,
                        placeholder: "Describe the issue...",
                        required: true,
                        className: "input min-h-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "priority",
                        value: formData.priority,
                        onChange: handleChange,
                        className: "input",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "low",
                                children: "Low"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "medium",
                                children: "Medium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "high",
                                children: "High"
                            }, void 0, false, {
                                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        name: "photoUrl",
                        value: formData.photoUrl,
                        onChange: handleChange,
                        placeholder: "Photo URL (optional)",
                        className: "input"
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        disabled: loading,
                        children: loading ? 'Submitting...' : 'Submit Request'
                    }, void 0, false, {
                        fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/features/MaintenanceRequest.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(MaintenanceRequest, "iconFVEOOhNFEma/6jMnoUCkYfo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MaintenanceRequest;
var _c;
__turbopack_context__.k.register(_c, "MaintenanceRequest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_3bad6a59._.js.map