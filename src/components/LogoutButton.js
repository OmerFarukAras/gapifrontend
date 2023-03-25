import {Button} from "@tremor/react";
import {LogoutIcon} from "@heroicons/react/outline";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Button
        variant="light" icon={LogoutIcon}
        onClick={() => init()}
    >
        Logout
    </Button>
);

function init() {
    sessionStorage.removeItem("token")
    window.location.reload(true)
}