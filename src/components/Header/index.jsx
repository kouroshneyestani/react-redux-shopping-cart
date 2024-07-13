import { Container, GitHubButton } from "../index";
import CartToggleButton from "./CartToggleButton";

function Header() {
    return (
        <header>
            <Container>
                <div className="h-24 gap-2 flex items-center justify-between">
                    <div className="gap-2 flex items-center">
                        <GitHubButton
                            text="Github Page"
                            username="kouroshneyestani"
                            repository="react-redux-shopping-cart"
                        />
                    </div>
                    <ul>
                        <li>
                            <CartToggleButton />
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
}

export default Header;
