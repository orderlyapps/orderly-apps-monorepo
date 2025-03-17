import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export const MapDetails = () => {
  const { mapID, fileType } = useOrderlyPageParams("map_details");
  return (
    <TransformWrapper>
      <TransformComponent
        wrapperStyle={{ height: "100%", width: "100%" }}
        contentStyle={{ height: "100%", width: "100%" }}
      >
        <img
          src={`https://qwshevjczcvmibztktuc.supabase.co/storage/v1/object/public/maps/${mapID}.${fileType}`}
          alt=""
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};
