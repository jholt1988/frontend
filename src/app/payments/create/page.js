import CreatePaymentForm from "@/features/CreatePaymentForm";


const CreatePaymentPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Create Payment</h1>
        <CreatePaymentForm />
        </div>
    );
    }
export default CreatePaymentPage;