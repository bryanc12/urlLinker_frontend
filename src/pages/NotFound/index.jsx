import icons from "../../assets/img";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-full flex-col text-center gap-5">
            <div className="w-16">
                <icons.notFound />
            </div>
            <div className="font-bold text-2xl">404 Not Found</div>
            <a
                className="tracking-normal text-base font-normal underline hover:cursor-pointer"
                href="/"
            >
                Go To Homepage
            </a>
        </div>
    );
}
