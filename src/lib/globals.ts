export const yourName = "Arnold Clynton";
export const yourFirstName = "Arnold";

type LinkStruct = {
    name: string;
    path: string;
};

export const links: LinkStruct[] = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "contact",
        path: "/contact"
    }
];