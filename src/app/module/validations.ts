export class CustomRegex {



    public static password = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$';
    public static username = '^[a-zA-Z ]*$';
    public static email = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\\.[a-zA-Z]{2,100}$';


}