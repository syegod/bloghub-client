import { IconType } from "react-icons";

export interface AuthContextProps {
    isAuth: boolean;
    userData: IUser | null;
    token: string | null;
    state: string;
}

export interface PostsContextProps{
    posts: IPost[];
    updateValue: (param:any)=>void;
}

export interface IUser {
    _id: string;
    username: string;
    email: string;
    emailConfirmed: boolean;
    passwordHash: string;
    avatarUrl?: string;
}

export interface PostMenuProps {
    btn: React.ReactNode;
    btnClasses?: string;
    maxWidth?: boolean;
    deleteClick: () => void;
    editClick: () => void;
}

export interface PostCardProps {
    post: IPost;
    deletePost: (id: string) => void;
}

export interface IPost {
    _id: string,
    text: string,
    author: any,
    createdAt: string,
    likes: [string],
    views: [string],
    comments: [string],
    reposts: [string],
    image?: string
}

export interface LayoutProps {
    children?: React.ReactNode
}

export interface UserHeadLinksProps {
    setIsModalOpen: (state: boolean) => void;
}

export interface UserAvatarProps {
    src?: string;
    size: 'large' | 'medium' | 'small';
    activeStatus?: boolean;
}

export interface SideBarItemProps{
    Icon: IconType;
    IconActive: IconType;
    text: string;
    href: string;
    active?: boolean;
}

export interface WhoToFollowItemProps {
    username: string;
    userAvatar?: string;
    userEmail?: string;
}

export interface ImgPreviewProps{
    image: string | ArrayBuffer | any;
    handleRemove: () => void;
}

export interface ModalProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    changeState: (state: boolean) => void;
}

export interface CustomTextAreaProps {
    size?: number;
    disabled?: boolean;
    onChange?: (e: any) => void;
    textStyles?: string;
    maxLength?: number;
    placeholder?: string;
    id?: string;
    styles?: string;
    border?: boolean;
}

export interface CustomSelectProps {
    items: Object[];
    Element: React.ElementType;
    id: string;
    placeholder?: string;
}

export interface CustomInputProps {
    label?: string;
    type: string;
    id: string;
    disabled?: boolean;
    onChange?: (value?: any) => void;
    placeholder?: string;
    autoComplete?: boolean;
    ref?: React.MutableRefObject<null>;
}

export interface CustomBtnProps {
    text: string;
    onClick?: () => void;
    fullWidth?: boolean;
    danger?: boolean;
    secondary?: boolean;
    type?: "submit" | "reset" | "button" | undefined,
    disabled?: boolean;
    fullRounded?: boolean;
    containerStyles?: string;
}

export interface AuthSocialButtonProps{
    icon: IconType;
    onClick: () => void;
}

export interface TagProps {
    children?: string;
    onClick?: () => void;
    selected?: boolean;
}