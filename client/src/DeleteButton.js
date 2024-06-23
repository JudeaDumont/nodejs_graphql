import {Button} from "@mui/material";


export function DeleteButton(deleteUser, userId, refetchUsers) {
    return <Button
        onClick={(e) => {
            deleteUser(
                {
                    variables: {
                        deleteUserId: userId
                    }
                })
            refetchUsers();
        }}
        variant="contained">
        X
    </Button>;
}