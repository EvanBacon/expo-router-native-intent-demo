const UIActivityTypeAddToReadingList =
  "com.apple.UIKit.activity.AddToReadingList";
const UIActivityTypePostToFlickr = "com.apple.UIKit.activity.PostToFlickr";
const UIActivityTypePostToVimeo = "com.apple.UIKit.activity.PostToVimeo";
const UIActivityTypePostToTencentWeibo =
  "com.apple.UIKit.activity.TencentWeibo";
const UIActivityTypeAirDrop = "com.apple.UIKit.activity.AirDrop";
const UIActivityTypePostToFacebook = "com.apple.UIKit.activity.PostToFacebook";
const UIActivityTypePostToTwitter = "com.apple.UIKit.activity.PostToTwitter";
const UIActivityTypePostToWeibo = "com.apple.UIKit.activity.PostToWeibo";
const UIActivityTypeMessage = "com.apple.UIKit.activity.Message";
const UIActivityTypeMail = "com.apple.UIKit.activity.Mail";
const UIActivityTypePrint = "com.apple.UIKit.activity.Print";
const UIActivityTypeCopyToPasteboard =
  "com.apple.UIKit.activity.CopyToPasteboard";
const UIActivityTypeAssignToContact =
  "com.apple.UIKit.activity.AssignToContact";
const UIActivityTypeSaveToCameraRoll =
  "com.apple.UIKit.activity.SaveToCameraRoll";
const UIActivityTypeOpenInIBooks = "com.apple.UIKit.activity.OpenInIBooks";
const UIActivityTypeMarkupAsPDF = "com.apple.UIKit.activity.MarkupAsPDF";
const UIActivityTypeSharePlay =
  "com.apple.UIKit.activity.SharePlay"; /* iOS 15.4 */
const UIActivityTypeCollaborationInviteWithLink =
  "com.apple.UIKit.activity.CollaborationInviteWithLink"; /** iOS 16 */
const UIActivityTypeCollaborationCopyLink =
  "com.apple.UIKit.activity.CollaborationCopyLink"; /** iOS 16 */
const UIActivityTypeAddToHomeScreen =
  "com.apple.UIKit.activity.AddToHomeScreen"; /** iOS 16.4 */

function IgnoreAll() {
  return (
    <TouchableBounce
      onPress={async () => {
        const res = await Share.share(
          {
            message: "hey",
            url: await getImageUrl(),
          },
          {
            excludedActivityTypes: [
              UIActivityTypeAddToReadingList,
              UIActivityTypePostToFlickr,
              UIActivityTypePostToVimeo,
              UIActivityTypePostToTencentWeibo,
              UIActivityTypeAirDrop,
              UIActivityTypePostToFacebook,
              UIActivityTypePostToTwitter,
              UIActivityTypePostToWeibo,
              UIActivityTypeMessage,
              UIActivityTypeMail,
              UIActivityTypePrint,
              UIActivityTypeCopyToPasteboard,
              UIActivityTypeAssignToContact,
              UIActivityTypeSaveToCameraRoll,
              UIActivityTypeOpenInIBooks,
              UIActivityTypeMarkupAsPDF,
              UIActivityTypeSharePlay,
              UIActivityTypeCollaborationInviteWithLink,
              UIActivityTypeCollaborationCopyLink,
              UIActivityTypeAddToHomeScreen,
              // Custom from debugging
              // Notes
              "com.apple.mobilenotes.SharingExtension",
              // Snapchat
              "com.toyopagroup.picaboo.share",
              // Journal
              "com.apple.journal.JournalShareExtension",
            ],
            tintColor: "green",
          }
        );
        console.log(">>>", res);
      }}
    >
      <Image
        source={img}
        style={{ borderRadius: 12, width: 200, height: 200 }}
      />
    </TouchableBounce>
  );
}
