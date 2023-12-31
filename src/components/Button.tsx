type ButtonProps = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    id?: string;
    text: string;
    onClick?: () => void;
};

const Button = (props: ButtonProps) => {
    const { type, id, text, onClick } = props;
    return (
        <button
            id={id}
            type={type}
            className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
