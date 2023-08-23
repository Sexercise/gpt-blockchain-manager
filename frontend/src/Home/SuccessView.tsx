import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/session";
import {
  BlogsIcon,
  CelebrateIcon,
  GuideIcon,
  SeparatorLine,
  SignOutIcon,
} from "../assets/images";
import Terminal from "../components/Terminal"

interface ILink {
  name: string;
  onClick: () => void;
  icon: string;
}

export default function SuccessView(props: { userId: string }) {
  let userId = prop