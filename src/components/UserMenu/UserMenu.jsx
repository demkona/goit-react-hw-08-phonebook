import { UserMenuBox, UserMenuMail, UserMenuButton } from "./UserMenu.styled";

const UserMenu = () => {

    return (
        <>
            <UserMenuBox>
                <UserMenuMail>
                    mango@mail.com
                </UserMenuMail>
                <UserMenuButton>Logout</UserMenuButton>
            </UserMenuBox></>
    )

}
export default UserMenu;