import {AddPostSynopsisForm} from "@/components/Forms/AddPostSynopsisForm/AddPostSynopsisForm";
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
interface IFormValues {
  "First Name": string;
  Age: number;
}

const AdminPage = () => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>AdminPage</h1>
      <AddPostSynopsisForm />
    </>
  );
};

export default AdminPage;
