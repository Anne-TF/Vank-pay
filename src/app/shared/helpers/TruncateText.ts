const TruncateText = (text: string, length: number) =>
{
    if (!text)
    {
        return '';
    }

    let content = text.trim();
    if (content.length > length)
    {
        content = content.substring(0, length);
        content = content.concat('...');
    }

    return content;
};

export default TruncateText;