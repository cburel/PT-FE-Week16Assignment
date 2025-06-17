import React, { useState } from "react";
import CreateTextField from "./CreateTextField";
import CreateButton from "./CreateButton";
import DeleteTextField from "./DeleteTextField";
import DeleteButton from "./DeleteButton";
import UpdateTextField from "./UpdateTextField";
import UpdateButton from "./UpdateButton";

export default function Form() {
    return (
        <form>
            <CreateTextField />
            <CreateButton />
            <DeleteTextField />
            <DeleteButton />
            <p></p>
            <UpdateTextField />
            <UpdateButton />
        </form>
    )
}