import FormButton from "../../Components/Common/FormButton";

const Page = () => {
  return (
    <div className="flex gap-3 items-center">
      <FormButton
        size="small"
        onClick={() => alert("Confirm Form")}
        type="confirm"
      >
        confirm
      </FormButton>
      <FormButton
        size="small"
        onClick={() => alert("Cancel Form")}
        type="cancel"
      >
        cancel
      </FormButton>
    </div>
  );
};

export default Page;
