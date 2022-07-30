interface LoginPayload
{
    Modulo: 'validarCliente';
    User: string;
    Password: string;
    smsHash?: string;
    smsCode?: string;
    mailHash?: string;
    mailCode?: string;
    '2FAToken'?: string;
}

export default LoginPayload;
