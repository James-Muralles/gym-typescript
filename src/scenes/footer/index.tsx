import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                Egestas congue quisque egestas diam in arcu. Proin fermentum leo vel orci porta non pulvinar neque. Ultricies mi eget mauris pharetra et. Sagittis vitae et leo duis ut diam quam nulla. Varius sit amet mattis vulputate enim. Scelerisque in dictum non consectetur a. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Tortor consequat id porta nibh venenatis cras sed felis. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                </p>
                <p>
                    © Evogym All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orcu senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>Ullsmcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p className="my-5">(333)425-6825</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer