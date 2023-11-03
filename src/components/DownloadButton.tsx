import { FileDownIcon } from "lucide-react";
interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  className: string;
}
const DownloadButton = ({
  fileUrl,
  fileName,
  className,
}: DownloadButtonProps) => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <button onClick={handleDownload} className="cursor-pointer">
      <FileDownIcon className={className} />
    </button>
  );
};

export default DownloadButton;
