import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section>
            <div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-24">
                <div className="justify-center w-full text-center lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                        <p className="mt-8 text-5xl font-medium tracking-tighter text-black">
                            Welcome to chirps
                        </p>
                        <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
                            If you could kick the person in the pants responsible for most of your
                            trouble, you sit for a month
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row">
                        <Link to={"/register"} className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                            Get Started
                        </Link>
                        <a href="#" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                            Learn more   →
                        </a>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-6">
                    <a className="p-1 -m-1 group" aria-label="Follow on Twitter" href="#">
                        <ion-icon class="w-6 h-6 transition fill-black hover:text-blue-500 md hydrated" name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon>
                    </a><a className="p-1 -m-1 group" aria-label="Follow on Instagram" href="#">
                        <ion-icon class="w-6 h-6 transition fill-black hover:text-blue-500 md hydrated" name="logo-instagram" role="img" aria-label="logo instagram"></ion-icon></a><a className="p-1 -m-1 group" aria-label="Follow on GitHub" href="#">
                        <ion-icon class="w-6 h-6 transition fill-black hover:text-blue-500 md hydrated" name="logo-github" role="img" aria-label="logo github"></ion-icon></a><a className="p-1 -m-1 group" aria-label="Follow on LinkedIn" href="#">
                        <ion-icon class="w-6 h-6 transition fill-black hover:text-blue-500 md hydrated" name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default HeroSection