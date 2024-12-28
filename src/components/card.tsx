import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// interface CardProps {
//   item?: ApiResponse;
// }
export default function Card() {
  return (
    <div className="flex flex-col shadow rounded-md px-4 py-5 w-full max-w-[442px] gap-5">
      <div className="flex gap-2.5 w-full">
        <img
          src="/src/assets/engi.svg"
          alt="logo"
          className="object-contain w-20"
        />
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full items-center">
              <Typography className="text-grapefruit text-2xl">
                คณะวิศวกรรมศาสตร์
              </Typography>
              <FavoriteIcon className="w-1.5 h-1.5 text-grapefruit" />
            </div>
            <Typography
              variant="body1"
              fontWeight="medium"
              className="text-warm-grey text-xl"
            >
              สาขาวิศวกรรมทั่วไป
            </Typography>
          </div>
          <Typography
            variant="body1"
            fontWeight="light"
            className="text-warm-grey text-xl"
          >
            จุฬาลงกรณ์มหาวิทยาลัย
          </Typography>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-3">
        <div className="flex gap-6 items-center">
          <Typography
            variant="body1"
            fontWeight="light"
            className="text-grey-two text-xl"
          >
            รอบที่เปิด
          </Typography>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 bg-greenish-teal rounded-full flex items-center justify-center">
              <Typography variant="body1" className="text-white">
                1
              </Typography>
            </div>
            <div className="w-8 h-8 bg-grey rounded-full flex items-center justify-center">
              <Typography variant="body1" className="text-white">
                2
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Typography
            variant="body1"
            className="text-grapefruit text-base font-semibold"
          >
            รอบที่ 4 : Admission
          </Typography>
          <button className="px-5 py-2 text-xs border flex gap-2 rounded-2xl bg-transparent border-grapefruit text-grapefruit">
            แก้ไขคะแนน
            <img src="/src/assets/cal.svg" alt="cal" className="h-4" />
          </button>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="flex justify-center">
            <img
              src="/src/assets/medal.svg"
              alt="medal"
              className="w-7 h-9 ml-6"
            />
          </div>
          <div className="flex flex-col items-end w-1/3">
            <Typography
              variant="body1"
              fontWeight="light"
              className="text-grey-three text-xs"
            >
              คะแนนของคุณคือ
            </Typography>
            <Typography
              variant="h1"
              fontWeight="light"
              className="text-grey-three text-4xl"
            >
              22222
            </Typography>
          </div>
        </div>
        <div className="flex h-5 items-center space-x-4 justify-center my-4 w-full">
          <div className="flex flex-col items-center w-full">
            <Typography variant="body1" className="text-grey-two text-xl">
              20,845
            </Typography>
            <Typography variant="body1" className="text-grey-two text-xs">
              คะแนนต่ำสุด 60
            </Typography>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col items-center w-full">
            <Typography variant="body1" className="text-grey-two text-xl">
              20,845
            </Typography>
            <Typography variant="body1" className="text-grey-two text-xs">
              คะแนนเฉลี่ย 60
            </Typography>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col items-center w-full">
            <Typography variant="body1" className="text-grey-two text-xl">
              20,845
            </Typography>
            <Typography variant="body1" className="text-grey-two text-xs">
              คะแนนสูงสุด 60
            </Typography>
          </div>
        </div>
        <Separator />
        <div className="flex gap-5 items-center">
          <PlayArrowIcon className="text-[#48b6a3]" />
          <Typography variant="body1" className="text-[#48b6a3] text-base">
            ดูสัดส่วนคะแนน
          </Typography>
        </div>
        <Separator />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <PersonIcon className="text-warm-grey" />
            <Typography variant="body1" className="text-warm-grey text-xs">
              10 คนที่สนใจ
            </Typography>
          </div>
          <img src="/src/assets/share.svg" alt="medal" className="h-6" />
        </div>
      </div>
    </div>
  );
}
