import Link from "../Link";
import Para from "../Para";
import Separator from "../Separator";
import LitleTitle from "../Title/LitleTitle";
import Subtitle from "../Title/Subtitle";

const LoginCustomMenu = () => {
  return (
    <div className="h-full flex flex-col gap-y-3 w-80 p-3 ">
      <LitleTitle>Usuarios registrados</LitleTitle>
      <Para size="sm">¿Tienes una cuenta? Inicia sesión ahora</Para>
      <Link underline={true} color="ocean">
        Iniciar sesión
      </Link>
      <Separator />
      <LitleTitle>Clientes nuevos</LitleTitle>
      <Para size="sm">
        ¿Nuevo en GoDaddy? Crea una cuenta para comenzar hoy mismo.
      </Para>
      <Link underline={true} color="ocean">
        Crear una cuenta
      </Link>
      <Separator />
      <Subtitle>VÍNCULOS DE LA BANDEJA DE ENTRADA</Subtitle>
      <Link color="ocean">Inicia sesión en Correo Microsoft 365</Link>
      <Link color="ocean">Inicia sesión en Webmail de GoDaddy</Link>
    </div>
  );
};

export default LoginCustomMenu;
