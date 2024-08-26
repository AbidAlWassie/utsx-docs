import { IoCloudUploadOutline } from "react-icons/io5";

interface DropzoneProps {
  icon?: React.ReactNode;
  headingText?: string;
  descriptionText?: string;
  subDescriptionText?: string;
  accept?: string;
  maxSizeText?: string;
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  icon = <IoCloudUploadOutline className="w-12 h-12" />,
  headingText = "Click to upload",
  descriptionText = "or drag and drop",
  subDescriptionText = "SVG, PNG, JPG or GIF",
  accept = "image/*",
  maxSizeText = "(MAX. 800x400px)",
  onFileChange
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {/* Dynamically Render Icon */}
          {icon}

          {/* Dynamically Render Text */}
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">{headingText}</span> {descriptionText}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {subDescriptionText} {maxSizeText}
          </p>
        </div>

        {/* Hidden File Input */}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept={accept}
          onChange={onFileChange}
        />
      </label>
    </div>
  );
};
