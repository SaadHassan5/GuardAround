export const ChangeBackgroundColor = (backgroundColor) =>{
    return{
        type : 'CHANGE_BACKGROUND_COLOR',
        payload : backgroundColor
    };
};
export const CameraImgs = (Imgs) =>{
    return{
        type : 'Get_Imgs',
        payload : Imgs
    };
};