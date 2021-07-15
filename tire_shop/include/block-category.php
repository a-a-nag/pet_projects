<div id="block-category">
	<p class="header-title">Категории товаров</p>

	<ul>
		<li><a id="index1"><img src="images/wheel.png" id="mobile-images">Шины</a>
			<ul class="category-section">
				<li><a href=""><strong>Все модели</strong></a></li>
<?php
$result = mysql_query("SELECT * FROM category WHERE type='tire'",$link);
if (mysql_num_rows($result) > 0)
{
$row = mysql_fetch_array($result);
do
{
echo '
<li><a href="view_cat.php?cat='.strtolower($row["brand"]).'$type='.$row["type"].'">'.$row["brand"].'</a></li>';
}
while ($row = mysql_fetch_array($result));
}
?>
			</ul>
		</li>

		<li><a id="index2"><img src="images/wiper.png" id="book-images">Стеклоочистители</a>
			<ul class="category-section">
				<li><a href=""><strong>Все модели</strong></a></li>
<?php
$result = mysql_query("SELECT * FROM category WHERE type='wiper'",$link);
if (mysql_num_rows($result) > 0)
{
$row = mysql_fetch_array($result);
do
{
echo '
<li><a href="view_cat.php?cat='.strtolower($row["brand"]).'$type='.$row["type"].'">'.$row["brand"].'</a></li>';
}
while ($row = mysql_fetch_array($result));
}
?>
			</ul>
		</li>

		<li><a id="index3"><img src="images/battery.png" id="table-images">Аккумуляторы</a>
			<ul class="category-section">
				<li><a href=""><strong>Все модели</strong></a></li>
<?php
$result = mysql_query("SELECT * FROM category WHERE type='battery'",$link);
if (mysql_num_rows($result) > 0)
{
$row = mysql_fetch_array($result);
do
{
echo '
<li><a href="view_cat.php?cat='.strtolower($row["brand"]).'$type='.$row["type"].'">'.$row["brand"].'</a></li>';
}
while ($row = mysql_fetch_array($result));
}
?>
			</ul>
		</li>
	</ul>
</div>