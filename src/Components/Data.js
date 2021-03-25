import Button from "./Button";
import useForm from "../hooks/useForm";
import Input from "./Input";
import Select from "./Select";
import Photo from "./Photo";
export default function Form({submit, inputsData, textBtn, children, styling, stylingF, stylingI}) {

    const {
        inputs,
        handleSubmit,
        handleInputs,
        handlePhotos,
    } = useForm(submit,
        {}
    );

    const selectType = (i, n) => {

                return (<div key={n}>
                    <label>Uno</label>
                    <label>Dos</label>
                </div>)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className={stylingF || "d-flex flex-wrap justify-content-center"}>
                {inputsData ? 
                    inputsData.map((i,index) => 
                    selectType(i,index))
                    : ''
                }
                {children}
            </div>
            <Button type="submit" styling={styling} text={textBtn}></Button>
        </form>
    );
};