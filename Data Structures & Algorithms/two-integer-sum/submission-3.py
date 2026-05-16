class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nMap = {} # המילון שזוכר: {מספר: אינדקס}
        
        for i, num in enumerate(nums):
            diff = target - num
            
            # בדיקה: האם השותף של המספר הנוכחי כבר נמצא בזיכרון?
            if diff in nMap:
                # מחזירים את המיקום של השותף ואת המיקום הנוכחי
                return [nMap[diff], i]
            
            # אם לא מצאנו, נשמור את המספר הנוכחי והמיקום שלו לטובת הבאים בתור
            nMap[num] = i
            