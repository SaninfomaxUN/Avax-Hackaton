import {json, LoaderFunction, MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <h1>LOG-ME</h1>
            <ul>
                <li>
                    <p>David Santiago cruz Hernandez</p>
                </li>
                <li>
                    <p>Juan Camilo Cardenas Zabala</p>
                </li>
                <li>
                    <p>Diego Fernando Quintero Gomez</p>
                </li>
                <li>
                    <p>Rodrigo Sierra</p>
                </li>
            </ul>

        </div>
    );
}
