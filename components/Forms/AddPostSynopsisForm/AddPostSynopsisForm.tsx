"use client";
import {useForm, SubmitHandler} from "react-hook-form";

import styles from "./AddPostSynopsisForm.module.css";
import {addPost} from "@/services/postServices";
import {useState} from "react";

export const AddPostSynopsisForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm<Inputs>();

  const [description, setDescription] = useState("");
  console.log("description", description);

  // const [description, setDescription] = useState("fjskdjfljk \n kjfkjdf");

  const descrObjs = [{tag: "p", text: ""}];

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const resp = await addPost({...data, description});

    console.log("resp", resp);

    if (resp?.code === 201) {
      setDescription("");
      reset();
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Stack
          <select className={styles.select} {...register("stack")}>
            <option value="">Select...</option>
            <option value="htmlcss">HTML+CSS</option>
            <option value="js">JS</option>
            <option value="react">REACT</option>
            <option value="next">NEXT</option>
            <option value="ts">TS</option>
            <option value="node">NODE</option>
            <option value="reactnative">REACT-NATIVE</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className={styles.label}>
          Title
          <input
            className={styles.input_title}
            defaultValue=""
            {...register("title")}
          />
        </label>
        <label className={styles.label}>
          Descripton
          <textarea
            className={styles.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // onChange={console.log}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     // setDescription(description + "<br/>");
            //     setDescription(description + "\n");
            //   }
            // }}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     setDescription(description + "<br/>");
            //   }
            // }}
          />
        </label>

        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

// {errors.exampleRequired && <span>This field is required</span>}
